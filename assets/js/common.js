class Common {

    totalExperience; vssExperience; sisExperience; bbExperience;

    constructor() {
        this.totalExperience = this.getExperience('06/01/2015', new moment());
        // this.vssExperience = this.getExperience('06/01/2015', '05/31/2018');
        // this.sisExperience = this.getExperience('06/04/2018', '05/25/2020');
        // this.bbExperience1 = this.getExperience('06/01/2020', '03/31/2022');
        this.bbExperience2 = this.getExperience('04/01/2022', new moment());
        this.setExperience(document.getElementsByClassName("totalExperence"), this.totalExperience);
        this.setExperience(document.getElementsByClassName("bbExperence"), this.bbExperience2);
    }

    getExperience(startdate, enddate) {
        var startDate = moment(startdate, 'MM/DD/YYYY');
        var endDate = moment(enddate, 'MM/DD/YYYY');
        let experience = moment.preciseDiff(endDate, startDate, true);
        return experience.years + "." + experience.months;
    }

    setExperience(list, value) {
        for (let item of list) {
            item.innerHTML = value;
        }
    }
}