const FakeUsers = {
  user  : { password : 'user' , isStaff: false, isUser: true },
  admin : { password : 'admin', isStaff: true, isUser: false },
}


export function autentification( { username, password } )
{
  return new Promise( resolve => {
    const success = FakeUsers[username] && FakeUsers[username].password === password;
    const user    = success ? FakeUsers[username] : null;

    setTimeout( () => resolve( { 
      success : !!user,
      data    : { ...user, username },
    } ), 200 )
  } );
}

