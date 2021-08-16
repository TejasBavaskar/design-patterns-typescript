// Product//
abstract class Member {
  public registration() {
    console.log('Registration is done.');
  }

  public notify() {
    console.log('Notification sent to email...');
  }
  
  abstract policies(): any;
  abstract discount(): any;
}

//Concrete Region1-Product1
class MumbaiLifetimeMember extends Member {
  public policies() {
    console.log('Mumbai Lifetime Member Policies....');
  }
  public discount() {
    console.log('Mumbai Lifetime Member discount= 70%');
  }
}

//Concrete Region1-Product2
class MumbaiAnnualMember extends Member {
  public policies() {
    console.log('Mumbai Annual Member Policies....');
  }
  public discount() {
    console.log('Mumbai Annual Member discount= 50%');
  }
}

//Concrete Region2-Product1
class NYLifetimeMember extends Member {
  public policies() {
    console.log('NY Lifetime Member Policies....');
  }
  public discount() {
    console.log('NY Lifetime Member discount= 60%');
  }
}

//Concrete Region2-Product2
class NYAnnualMember extends Member {
  public policies() {
    console.log('NY Annual Member Policies....');
  }
  public discount() {
    console.log('NY Annual Member discount= 30%');
  }
}

//Client Using Factory
abstract class MemberManager {
  abstract createMembership(type: string): any;
  abstract rules(): any;
}

class MumbaiManager extends MemberManager {
  createMembership(type: string) {
    let m!: Member;
    if(type === 'lifetime') {
      m = new MumbaiLifetimeMember();
    } else if(type === 'annual') {
      m = new MumbaiAnnualMember();
    }
    return m;
  }

  rules() {
    console.log('Mumbai Tennis Club Rules');
  }
}

class NYManager extends MemberManager{
  createMembership(type: string) {
    let m!: Member;
    if(type === 'lifetime') {
      m = new NYLifetimeMember();
    } else if(type === 'annual') {
      m = new NYAnnualMember();
    }
    return m;
  }

  rules() {
      console.log('NY Tennis Club Rules');
  }
}

//const mngr = new MumbaiManager();
const mngr = new NYManager();
mngr.rules();
const obj = mngr.createMembership('lifetime');
obj.registration();
obj.policies();
obj.discount();
obj.notify();

export {};