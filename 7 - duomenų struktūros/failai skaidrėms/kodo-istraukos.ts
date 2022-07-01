class ListNode<T> {
  constructor(
    public data: T,
    public next: ListNode<T> | null = null
  ) { }
}

class List<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor(data?: T) {
    if (data !== undefined) {
      this.head = new ListNode(data);
      this.tail = this.head;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  forEach(callback: (data: T) => void): void {
    let current = this.head;

    while (true) {
      if (current === null) break;
      callback(current.data);
      current = current.next;
    }
  }

  push(data: T): void {
    if (this.tail === null) {
      this.head = new ListNode(data);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(data);
      this.tail = this.tail.next;
    }
  }

  pop(): T | null {
    let current = this.head;

    while (true) {
      if (current === null) return null;
      if (current.next === null) {
        const returnVal = current.data;
        this.head = null;
        this.tail = null;

        return returnVal;
      } else if (current.next.next === null) {
        const returnVal = current.next.data;
        current.next = null;
        this.tail = current;

        return returnVal;
      }
      current = current.next;
    }
  }

  includes(data: T): boolean {
    let current = this.head;

    while (true) {
      if (current === null) break;
      if (current.data === data) return true;
      current = current.next;
    }

    return false;
  }
}

