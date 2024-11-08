"use client"

//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.1.0.0 (NJsonSchema v11.0.2.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class Client {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "";
    }

    /**
     * @return OK
     */
    list(): Promise<CustomerSummaryDto[]> {
        let url_ = this.baseUrl + "/Customer/List";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processList(_response);
        });
    }

    protected processList(response: Response): Promise<CustomerSummaryDto[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CustomerSummaryDto.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerSummaryDto[]>(null as any);
    }

    /**
     * @param id (optional) 
     * @return OK
     */
    customerGET(id: number | undefined): Promise<CustomerDto> {
        let url_ = this.baseUrl + "/Customer?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCustomerGET(_response);
        });
    }

    protected processCustomerGET(response: Response): Promise<CustomerDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = CustomerDto.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CustomerDto>(null as any);
    }

    /**
     * @param body (optional) 
     * @return OK
     */
    customerPOST(body: CreateCustomerCommand | undefined): Promise<number> {
        let url_ = this.baseUrl + "/Customer";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCustomerPOST(_response);
        });
    }

    protected processCustomerPOST(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    /**
     * @param body (optional) 
     * @return OK
     */
    customerPUT(body: UpdateCustomerCommand | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/Customer";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCustomerPUT(_response);
        });
    }

    protected processCustomerPUT(response: Response): Promise<boolean> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param body (optional) 
     * @return OK
     */
    saleOpportunityPOST(body: CreateSaleOpportunityCommand | undefined): Promise<number> {
        let url_ = this.baseUrl + "/SaleOpportunity";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSaleOpportunityPOST(_response);
        });
    }

    protected processSaleOpportunityPOST(response: Response): Promise<number> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<number>(null as any);
    }

    /**
     * @param body (optional) 
     * @return OK
     */
    saleOpportunityPUT(body: UpdateSaleOpportunityCommand | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/SaleOpportunity";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSaleOpportunityPUT(_response);
        });
    }

    protected processSaleOpportunityPUT(response: Response): Promise<boolean> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<boolean>(null as any);
    }
}

export class CreateCustomerCommand implements ICreateCustomerCommand {
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;

    constructor(data?: ICreateCustomerCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.status = _data["status"];
            this.created = _data["created"] ? new Date(_data["created"].toString()) : <any>undefined;
            this.name = _data["name"];
            this.email = _data["email"];
            this.phone = _data["phone"];
        }
    }

    static fromJS(data: any): CreateCustomerCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateCustomerCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["status"] = this.status;
        data["created"] = this.created ? this.created.toISOString() : <any>undefined;
        data["name"] = this.name;
        data["email"] = this.email;
        data["phone"] = this.phone;
        return data;
    }
}

export interface ICreateCustomerCommand {
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
}

export class CreateSaleOpportunityCommand implements ICreateSaleOpportunityCommand {
    status?: SaleStatus;
    customerId?: number;
    name?: string | undefined;

    constructor(data?: ICreateSaleOpportunityCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.status = _data["status"];
            this.customerId = _data["customerId"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): CreateSaleOpportunityCommand {
        data = typeof data === 'object' ? data : {};
        let result = new CreateSaleOpportunityCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["status"] = this.status;
        data["customerId"] = this.customerId;
        data["name"] = this.name;
        return data;
    }
}

export interface ICreateSaleOpportunityCommand {
    status?: SaleStatus;
    customerId?: number;
    name?: string | undefined;
}

export class CustomerDto implements ICustomerDto {
    id?: number;
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    saleOpportunities?: SaleOpportunityDto[] | undefined;

    constructor(data?: ICustomerDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.status = _data["status"];
            this.created = _data["created"] ? new Date(_data["created"].toString()) : <any>undefined;
            this.name = _data["name"];
            this.email = _data["email"];
            this.phone = _data["phone"];
            if (Array.isArray(_data["saleOpportunities"])) {
                this.saleOpportunities = [] as any;
                for (let item of _data["saleOpportunities"])
                    this.saleOpportunities!.push(SaleOpportunityDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): CustomerDto {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["status"] = this.status;
        data["created"] = this.created ? this.created.toISOString() : <any>undefined;
        data["name"] = this.name;
        data["email"] = this.email;
        data["phone"] = this.phone;
        if (Array.isArray(this.saleOpportunities)) {
            data["saleOpportunities"] = [];
            for (let item of this.saleOpportunities)
                data["saleOpportunities"].push(item.toJSON());
        }
        return data;
    }
}

export interface ICustomerDto {
    id?: number;
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    saleOpportunities?: SaleOpportunityDto[] | undefined;
}

export enum CustomerStatus {
    Active = "Active",
    NonActive = "NonActive",
    Lead = "Lead",
}

export class CustomerSummaryDto implements ICustomerSummaryDto {
    id?: number;
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;

    constructor(data?: ICustomerSummaryDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.status = _data["status"];
            this.created = _data["created"] ? new Date(_data["created"].toString()) : <any>undefined;
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): CustomerSummaryDto {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerSummaryDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["status"] = this.status;
        data["created"] = this.created ? this.created.toISOString() : <any>undefined;
        data["name"] = this.name;
        return data;
    }
}

export interface ICustomerSummaryDto {
    id?: number;
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;
}

export class SaleOpportunityDto implements ISaleOpportunityDto {
    id?: number;
    customerId?: number;
    status?: SaleStatus;
    name?: string | undefined;

    constructor(data?: ISaleOpportunityDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.customerId = _data["customerId"];
            this.status = _data["status"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): SaleOpportunityDto {
        data = typeof data === 'object' ? data : {};
        let result = new SaleOpportunityDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["customerId"] = this.customerId;
        data["status"] = this.status;
        data["name"] = this.name;
        return data;
    }
}

export interface ISaleOpportunityDto {
    id?: number;
    customerId?: number;
    status?: SaleStatus;
    name?: string | undefined;
}

export enum SaleStatus {
    New = "New",
    ClosedWon = "ClosedWon",
    ClosedLost = "ClosedLost",
}

export class UpdateCustomerCommand implements IUpdateCustomerCommand {
    id?: number;
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;

    constructor(data?: IUpdateCustomerCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.status = _data["status"];
            this.created = _data["created"] ? new Date(_data["created"].toString()) : <any>undefined;
            this.name = _data["name"];
            this.email = _data["email"];
            this.phone = _data["phone"];
        }
    }

    static fromJS(data: any): UpdateCustomerCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateCustomerCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["status"] = this.status;
        data["created"] = this.created ? this.created.toISOString() : <any>undefined;
        data["name"] = this.name;
        data["email"] = this.email;
        data["phone"] = this.phone;
        return data;
    }
}

export interface IUpdateCustomerCommand {
    id?: number;
    status?: CustomerStatus;
    created?: Date;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
}

export class UpdateSaleOpportunityCommand implements IUpdateSaleOpportunityCommand {
    id?: number;
    status?: SaleStatus;
    customerId?: number;
    name?: string | undefined;

    constructor(data?: IUpdateSaleOpportunityCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.status = _data["status"];
            this.customerId = _data["customerId"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): UpdateSaleOpportunityCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateSaleOpportunityCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["status"] = this.status;
        data["customerId"] = this.customerId;
        data["name"] = this.name;
        return data;
    }
}

export interface IUpdateSaleOpportunityCommand {
    id?: number;
    status?: SaleStatus;
    customerId?: number;
    name?: string | undefined;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}