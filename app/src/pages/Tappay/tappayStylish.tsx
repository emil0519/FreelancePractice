const tappay = {
  setupSDK() {
    (window as any).TPDirect.setupSDK(
      "12348",
      "app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF",
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
    return (window as any).TPDirect.card.getTappayFieldsStatus().canGetPrime;
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
