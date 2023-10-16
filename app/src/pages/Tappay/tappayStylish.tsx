const tappay = {
  setupSDK() {
    (window as any).TPDirect.setupSDK(
      "137320",
      "app_Kw8r1y3FsqZ18CBOY53Dja0WLjaFISoKUKVcK0UUZQHPgIhxnq5OXkGMccE1",
      "sandbox"
    );
  },
  setupCard(numberElement: any, expirationDateElement: any, ccvElement: any) {
    (window as any).TPDirect.card.setup({
      fields: {
        number: {
          element: numberElement,
          placeholder: "**** **** **** ****",
        },
        expirationDate: {
          element: expirationDateElement,
          placeholder: "MM / YY",
        },
        ccv: {
          element: ccvElement,
          placeholder: "後三碼",
        },
      },
      styles: {
        ".valid": {
          color: "green",
        },
        ".invalid": {
          color: "red",
        },
      },
    });
  },
  canGetPrime() {
    return (window as any).TPDirect.card.getTappayFieldsStatus();
  },
  onUpdate() {
    return (window as any).TPDirect.card.onUpdate((updates: any) => {
      console.log("update function");
      console.log(updates);
    });
  },
  getPrime() {
    return new Promise((resolve) => {
      (window as any).TPDirect.card.getPrime((result: any) => {
        resolve(result);
      });
    });
  },
};

export default tappay;
