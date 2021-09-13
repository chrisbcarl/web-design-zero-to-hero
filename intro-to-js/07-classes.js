// 2021-05-31
// Chris Carl

// classes


// object - json (Javascript Object Notation)
function print_name() {
    console.log(`${this.name}`)
}
let user = {
    name: 'user',
    email: 'user1@domain.com',
    print_email: function() {console.log(`${this.email}`)},  // can't use arrow functions here because of 'this'
    print_name: print_name,
}
user.print_email()


// old style "constructor"
function User(name, email) {
    let new_user = {
        name: name,
        email: email,
        print_email: function() {console.log(`${this.email}`)},  // can't use arrow functions here because of 'this'
        print_name: print_name,
    }
    return new_user
}


old_style = new User('hey', 'jude')
old_style.print_name()
old_style.print_email()



// true class
class UserClass {
    static instances = 0
    name = null  // actually public
    _email = null  // actually public, syntactically private

    constructor(name, email) {
      this.name = name;
      this._email = email;
      UserClass.instances += 1;
    }

    // old style get/set
    get_name() {
        return this.name;
    }
    set_name(name) {
        return this.name = name;
    }
    // new style get/set
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    print_name = print_name  // still reusing other people's work
    print_email() {
        console.log(`${this._email}`)
    }
    print_instances() {
        console.log(`${UserClass.instances}`)
    }
}

u = new UserClass('default', 'user@domain.com')
u.set_name('u')
u.email = 'u@domain.com'
u.print_name()
u.print_email()
u.print_instances()
y = new UserClass('default', 'user@domain.com')
y.print_name()
y.print_email()
u.print_instances()
y.print_instances()



class ChildUser extends UserClass {
    constructor(...args) {
      super(...args);
    }

    print_child_stuff() {
        console.log('i live via phone screens')
    }
    print_email() {
        super.print_email()
        console.log('but im a kid so maybe this a bad idea')
    }
}

c = new ChildUser('child', 'child@domain.com')
c.print_name()
c.print_email()
c.print_child_stuff()  // new function


/* polymorphism */
console.log(c instanceof UserClass)  // true
console.log(user instanceof UserClass)  // false
