import IDeal = Model.IDeal;
/**
 * Created by Sharon.Xi on 9/1/2016.
 */

export class InMemoryDealDAO implements DAO.DAO<Model.IDeal> {

    private deals: Array<Model.IDeal> =
    [
{
    "id" : 1000,
    "customerName":	"21st Centrury Oncology"	,
    "scenarioName":	"21st Centrury Oncology 30 day v1"	,
    "owner":	"Joshua Ellis"	,
    "createdDate":	"8/30/2015"	,
    "status":	"Submitted"	,
    "annualSales":	41484673.87	,
    "mbiSales":	35	,
    "fdgSales":	125	,
    "oePercent":	0.1155	,
    "mpiReturnPercent":	0.05	,
    "fdgReturnPercent":	0.05
}
,
{
    "id" : 1001,
    "customerName":	"Advocate Chicago"	,
    "scenarioName":	"Advocate Chicago"	,
    "owner":	"Georgy Johnson"	,
    "createdDate":	"2/6/2014"	,
    "status":	"Approved"	,
    "annualSales":	196782.98	,
    "mbiSales":	30.65	,
    "fdgSales":	120.65	,
    "oePercent":	0.1542	,
    "mpiReturnPercent":	0.1	,
    "fdgReturnPercent":	0.1
}
,
{
    "id" : 1002,
    "customerName":	"Westchester Medical Center"	,
    "scenarioName":	"Westchester Medical Center v1"	,
    "owner":	"Joshua Ellis"	,
    "createdDate":	"8/30/2015"	,
    "status":	"Submitted"	,
    "annualSales":	484673.87	,
    "mbiSales":	35	,
    "fdgSales":	125	,
    "oePercent":	0.1155	,
    "mpiReturnPercent":	0.05	,
    "fdgReturnPercent":	0.05
}
,
{
    "id" : 1003,
    "customerName":	"Westchester Medical Center"	,
    "scenarioName":	"Westchester Medical Center V1"	,
    "owner":	"Georgy Johnson"	,
    "createdDate":	"2/6/2014"	,
    "status":	"Approved"	,
    "annualSales":	296782.98	,
    "mbiSales":	30.65	,
    "fdgSales":	120.65	,
    "oePercent":	0.1542	,
    "mpiReturnPercent":	0.1	,
    "fdgReturnPercent":	0.1
}
,
{
    "id" : 1004,
    "customerName":	"Adventist Health West"	,
    "scenarioName":	"Adventist Health West - PDAC: Distribution Renewal"	,
    "owner":	"Joshua Ellis"	,
    "createdDate":	"8/30/2015"	,
    "status":	"Submitted"	,
    "annualSales":	51484673.87	,
    "mbiSales":	35	,
    "fdgSales":	125	,
    "oePercent":	0.1155	,
    "mpiReturnPercent":	0.05	,
    "fdgReturnPercent":	0.05
}
,
{
    "id" : 1005,
    "customerName":	"TYRONE HOSPITAL"	,
    "scenarioName":	"TYRONE HOSPITAL V1"	,
    "owner":	"Georgy Johnson"	,
    "createdDate":	"2/6/2014"	,
    "status":	"Approved"	,
    "annualSales":	696782.98	,
    "mbiSales":	30.65	,
    "fdgSales":	120.65	,
    "oePercent":	0.1542	,
    "mpiReturnPercent":	0.1	,
    "fdgReturnPercent":	0.1
},
{
    "id" : 1006,
    "customerName":	"ST FRANCIS HOSPITAL"	,
    "scenarioName":	"ST FRANCIS HOSPITAL 30 day v1"	,
    "owner":	"Joshua Ellis"	,
    "createdDate":	"8/30/2015"	,
    "status":	"Submitted"	,
    "annualSales":	484673.87	,
    "mbiSales":	35	,
    "fdgSales":	125	,
    "oePercent":	0.1155	,
    "mpiReturnPercent":	0.05	,
    "fdgReturnPercent":	0.05
}
,
{
    "id" : 1007,
    "customerName":	"EMERSON HOSP PHCY"	,
    "scenarioName":	"EMERSON HOSP PHCY New Distribution"	,
    "owner":	"Georgy Johnson"	,
    "createdDate":	"2/6/2014"	,
    "status":	"Approved"	,
    "annualSales":	456782.98	,
    "mbiSales":	30.65	,
    "fdgSales":	120.65	,
    "oePercent":	0.1542	,
    "mpiReturnPercent":	0.1	,
    "fdgReturnPercent":	0.1
},
{
    "id" : 1008,
    "customerName":	"HARTFORD HOSP PHCY"	,
    "scenarioName":	"HARTFORD HOSP PHCY 30 day v1"	,
    "owner":	"Joshua Ellis"	,
    "createdDate":	"8/30/2015"	,
    "status":	"In process"	,
    "annualSales":	55484673.87	,
    "mbiSales":	35	,
    "fdgSales":	125	,
    "oePercent":	0.1155	,
    "mpiReturnPercent":	0.05	,
    "fdgReturnPercent":	0.05
}
,
{
    "id" : 1009,
    "customerName":	"Billings Clinic Hospital - SC"	,
    "scenarioName":	"Billings Clinic Hospital - SC: Distribution Renewal"	,
    "owner":	"Georgy Johnson"	,
    "createdDate":	"2/6/2014"	,
    "status":	"Approved"	,
    "annualSales":	636782.98	,
    "mbiSales":	30.65	,
    "fdgSales":	120.65	,
    "oePercent":	0.1542	,
    "mpiReturnPercent":	0.1	,
    "fdgReturnPercent":	0.1
},
{
    "id" : 1010,
    "customerName":	"MetroHealth Medical Center"	,
    "scenarioName":	"MetroHealth Medical Center 5 day v1"	,
    "owner":	"Joshua Ellis"	,
    "createdDate":	"8/30/2015"	,
    "status":	"Submitted"	,
    "annualSales":	12484673.87	,
    "mbiSales":	35	,
    "fdgSales":	125	,
    "oePercent":	0.1155	,
    "mpiReturnPercent":	0.05	,
    "fdgReturnPercent":	0.05
}
,
{
    "id" : 1011,
    "customerName":	"Sharp HealthCare"	,
    "scenarioName":	"Sharp HealthCare - SC: Distribution Renewal"	,
    "owner":	"Georgy Johnson"	,
    "createdDate":	"2/6/2014"	,
    "status":	"Approved"	,
    "annualSales":	96782.98	,
    "mbiSales":	30.65	,
    "fdgSales":	120.65	,
    "oePercent":	0.1542	,
    "mpiReturnPercent":	0.1	,
    "fdgReturnPercent":	0.1
}
];

    create(deal:Model.IDeal) {
        this.deals.push(deal);
        return deal;
    }
    read(id:number) {
        return this.deals.filter(item => item.id === id);
    }

    getAll() {
        return this.deals;
    }
    update(deal:Model.IDeal) {
        let ind : number = this.deals.indexOf(deal);
        if (ind === -1)
            return false;
        else {
            this.deals[ind] = deal;
            return true;
        }
    }
    delete(id:number) {
        let match: Array<IDeal> = this.deals.filter(item => item.id === id);
        if (match && match.length > 0) {
            let ind: number = this.deals.indexOf(match[0]);
            this.deals.splice(ind, 1);
        }
        return true;
    }
}