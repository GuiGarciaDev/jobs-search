// Data types for API request

export interface Salary {
    average: number;
    high: number;
    low: number;
}

export interface Request {
    jobs: JobData[]
    totaljobs: number,
    ramainingjobs: number,
}

export interface JobData {
    jobId: string;
    source: string;
    jobTitle: string;
    location: string;
    estimatedSalary: string;
    salary: Salary;
    unifiedZippiaSalary: number;
    salaryPeriod: string;
    companyName: string;
    companyInitial: string;
    companyID: number;
    companyLogo: string;
    companyCategories: string[];
    jobDescription: string;
    showNewJobBedge: boolean;
    jobURL: string;
    url: string;
    partnerName: string;
    iconSVG: string;
    iconClass: string;
    templateName: string;
    titleID: string;
    socode: string;
    socCodeName: boolean;
    listingHash: string;
    postedDate: string;
    postingDate: string;
    actionDateSince: string;
    benefits: any[];
    jobTags: string[];
    jobLevels: string[];
    cpc: number;
    sponsorFlag: boolean;
    contactEmailsFlag: boolean;
    sponsoredDlp: boolean;
    easyApplyFlag: boolean;
    contactEmails: any[];
    bestCompaniesPageURLAtJobLocation: string;
    careerMainPageURL: string;
    skillsets: string[];
    OBJcountry: string;
    OBJcity: string;
    OBJstateCode: string;
    OBJstate: string;
    OBJcompanyID: number;
    OBJcompanyDisplay: string;
    OBJindustry: string;
    OBJpostingDate: Date;
    OBJtitle: string;
    OBJtitleDisplay: string;
    OBJurl: string;
    OBJzipcode: string;
    OBJjobTags: string[];
    OBJdesc: string;
    jobMajor: boolean;
    requiredDegree?: any;
    preferredDegrees: string[];
    formattedOriginalCompanyName: string;
    originalCPC: string;
    companyZippiaOverallScore: number;
    isSpammyCompany: boolean;
    nearbyTo0: any[];
    snippets: string[];
}



