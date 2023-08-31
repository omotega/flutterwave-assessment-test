class Helper {
  static generateAccountNumber = async (): Promise<any> => {
    const min = 1000000000;
    const max = 9999999999;
    let generatedNumbers: any = [];
    const randomNumber = String(
      Math.floor(Math.random() * (max - min + 1)) + min
    );

    var isUnique = true;
    for (var i = 0; i < generatedNumbers.length; i++) {
      if (randomNumber === generatedNumbers[i]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return randomNumber;
    } else {
      return Helper.generateAccountNumber();
    }
  };
}

export default Helper;
