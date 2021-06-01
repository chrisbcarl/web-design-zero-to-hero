// 2021-05-31
// Chris Carl

// classes


// object - json (Javascript Object Notation)
let user = {
    email: 'user1@domain.com',
    print_name: function() {console.log(`${this.email}`)}
}
user.print_name()


// true class
class User {
    email = null

    constructor(email) {
      this._email = email;
    }
    print_name() {
        console.log(`${this._email}`)
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}

u = new User('user@domain.com')
u.print_name()


class BadUser extends User {
    constructor(...args) {
      super(...args);
    }

    print_bad_stuff() {
        console.log('bad_stuff')
    }
    print_name() {
        super.print_name()
        console.log('but im bad')
    }
}

b = new BadUser('bad@domain.com')
b.print_name()
b.print_bad_stuff()


console.log(b instanceof User)
console.log(user instanceof User)
