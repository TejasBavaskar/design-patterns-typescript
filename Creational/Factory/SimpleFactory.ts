//This is simple factory example

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

//Concrete Product1
class LifetimeMember extends Member {
  public policies() {
    console.log('Lifetime Member Policies....');
  }
  public discount() {
    console.log('Lifetime Member discount= 70%');
  }
}

//Concrete Product2
class AnnualMember extends Member {
  public policies() {
    console.log('Annual Member Policies....');
  }
  public discount() {
    console.log('Annual Member discount= 50%');
  }
}

//Factory Class
class FactoryMember {
  public static createMembership(type:string) { // Factory method
    let m!: Member;
    if (type === 'Lifetime') {
      m = new LifetimeMember();
    } else if(type === 'Annual') {
      m = new AnnualMember();
    }
    return m;
  }
}

//Client Using Factory
class MemberManager {
  public createMembership(type:string) {
    const m = FactoryMember.createMembership(type);
    return m;
  }
}

const mngr = new MemberManager();
const annualObj = mngr.createMembership('Lifetime');
annualObj.policies();
annualObj.registration();
annualObj.discount();

export{};