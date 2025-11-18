const formatValue = (
  input: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    throw new Error("Input must be a string or an array.");
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (books: Book) => {
  const isBookAvailable = books.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${isBookAvailable} `
  );
};

type ArrayType = string | number;

const getUniqueValues = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const result: ArrayType[] = [];

  const addUnique = (value: ArrayType) => {
    let exists = false;

    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result[result.length] = value;
    }
  };

  for (let i = 0; i < arr1.length; i++) {
    addUnique(arr1[i]!);
  }

  for (let i = 0; i < arr2.length; i++) {
    addUnique(arr2[i]!);
  }

  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  if (products.length === 0) return 0;
  let totalPrice = products
    .map((product) => {
      const total = product.price * product.quantity;
      if (product.discount !== undefined) {
        return total * (1 - product.discount / 100);
      } else {
        return total;
      }
    })
    .reduce((subTotal, productTotal) => subTotal + productTotal, 0);

  return totalPrice;
};
