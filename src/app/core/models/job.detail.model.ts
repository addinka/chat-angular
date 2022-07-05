// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface JobDetailModel {
  _id?: string;
  _rev?: string;
  location?: string;
  onBoardStart?: string;
  language?: string;
  experience?: string;
  education?: string;
  employment?: string;
  jobDesc?: string;
  requirement?: string;
  benefits?: string;
  jobID?: string;
  status?: string;
  auditRecords?: AuditRecord[];
  lastUpdated?: string;
  type?: string;
  appliCount?: AppliCount;
  title?: string;
  categories?: string;
  author?: string;
  liveEnd?: string;
  liveStart?: string;
  applications?: Application[];
  collaborators?: string[];
  authorProfile?: Author;
  collaboratorProfiles?: Author[];
}

export interface Application {
  _id:           string;
  _rev:          string;
  jobID:         string;
  expSalary:     number;
  isNegotiable:  boolean;
  comments:      string;
  applicationID: string;
  status:        string;
  jobTitle:      string;
  userID:        string;
  userName:      string;
  auditRecords:  AuditRecord[];
  lastUpdated:   string;
  type:          string;
  user:          User;
}

export interface User {
  _id:           string;
  _rev:          string;
  name:          string;
  email:         string;
  contact:       string;
  language:      string;
  degree:        string;
  experience:    string;
  selfDesc:      string;
  qualification: string;
  lastUpdated:   string;
  type:          string;
  userID:        string;
  status:        string;
  attachments:   Applied;
  encryptedPass: string;
  notifications: Notification[];
  profpic:       string;
}

export interface AppliCount {
  applied:         Applied;
  test:            Applied;
  inter1:          Applied;
  inter2:          Applied;
  hired:           Applied;
  withdrawn:       Applied;
  rejected:        Applied;
  count_applied:   number;
  count_test:      number;
  count_inter1:    number;
  count_inter2:    number;
  count_hired:     number;
  count_withdrawn: number;
  count_rejected:  number;
}

// tslint:disable-next-line: no-empty-interface
export interface Applied {
}

export interface AuditRecord {
  updaterID: string;
  updaterType: string;
  action: string;
  timestamp: string;
}

export interface Author {
  _id:           string;
  _rev:          string;
  type:          string;
  name:          string;
  email:         string;
  title:         string;
  profpic:       string;
  isAdmin:       boolean;
  isSuperAdmin:  boolean;
  lastUpdated:   string;
  encryptedPass: string;
}

export interface Notification {
  forwardLink: string;
  message:     string;
  timestamp:   string;
  read:        boolean;
}
