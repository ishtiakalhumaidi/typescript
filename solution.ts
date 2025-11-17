const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const filterByRating = (
  books: {
    title: string;
    rating: number;
  }[]
): {
  title: string;
  rating: number;
}[] => {
  const filteredBook = books.filter((book) => book.rating >= 4);
  return filteredBook;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  const filteredUsers = users.filter((user) => user.isActive);
  return filteredUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

const getUniqueValues = (array1: any[], array2: any[]) => {
  const uniqueValuesArr: any[] = [];
  function have(arr: any[], value: any) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!have(uniqueValuesArr, array1[i])) {
      uniqueValuesArr.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!have(uniqueValuesArr, array2[i])) {
      uniqueValuesArr.push(array2[i]);
    }
  }
  return uniqueValuesArr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  const totalPrice = products.reduce((totalPrice, product) => {
    if (product.discount) {
      totalPrice +=
        product.price * product.quantity -
        product.price * product.quantity * (product.discount / 100);
    } else {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  }, 0);

  return totalPrice;
};