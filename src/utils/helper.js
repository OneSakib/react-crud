export default class Helper {
    static isValid(value) {
        return (value !== undefined && value !== null && (isNaN(value) ? value.length > 0 : value > 0))
    }
    static formValidate(obj) {
        let error = {}
        let is_valid = true;
        for (let o in obj) {
            if (!this.isValid(obj[o])) {
                error[o] = ['This field is required']
                is_valid = false;
            }
        }
        return { error, is_valid }
    }
}