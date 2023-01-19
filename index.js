class Calculator {
    constructor(displayElement) { 
        this.displayElement = displayElement
        this.operatorCheck = true
        this.equalsCheck = false
        this.clear()
    }    

    appendNumber(number) {
        if (this.equalsCheck) {
            this.displayContent = number
            this.equalsCheck = false
        } else {
            this.displayContent += number
        }
        this.operatorCheck = false
    }

    appendOperator(operator) {    
        if (this.operatorCheck) return false
        if (this.equalsCheck) this.equalsCheck = false
        this.displayContent += operator
        return this.operatorCheck = true         
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
        this.operatorCheck = true
    }

    compute() {
        if (this.operatorCheck) return
        try {
            this.displayContent = eval(this.displayContent);
            this.equalsCheck = true;
        } catch (e) {
            this.displayContent = "error";
            this.equalsCheck = true;
        }
    }
}
