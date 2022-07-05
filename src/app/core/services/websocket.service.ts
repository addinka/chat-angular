import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const CHAT_URL = "wss://now.ibm-jti.com/ats-chat-dev/";

/*export interface Message {
    type: string;
    data: string;
}*/

@Injectable()
export class WebsocketService {
    private subject: AnonymousSubject<MessageEvent>;
    public messages;

    constructor() {
        this.messages = this.connect(CHAT_URL)
        .pipe(
            map(
                (response: MessageEvent) => {
                    //console.log("resws:",response.data);
                    let data = JSON.parse(response.data)
                    return data;
                }
            )
            
        );
    }


    public connect(url): AnonymousSubject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    }

    private create(url): AnonymousSubject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = new Observable((obs: Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });

        let observer = {
            error: null,
            complete: null,
            next: (data) => {
                console.log('Message sent to websocket: ', data);
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(data);
                }
            }
        };

        return new AnonymousSubject<MessageEvent>(observer, observable);
    }
}