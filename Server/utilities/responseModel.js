class ResponseModel {
   
    success = true;
    message = null;
    errors = [];
    constructor(data = null, message = null, errors=[]) {
        this.data = data;
        this.message = message;
        this.errors = errors;

        if(errors.length > 0){
            this.success = false;
        }
    }
}

module.exports = ResponseModel