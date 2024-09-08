async function signUp(email, password) {
    try {
      const response = await fetch('/.netlify/functions/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'signUp', email, password }),
      });
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function signIn(email, password) {
    try {
      const response = await fetch('/.netlify/functions/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'signIn', email, password }),
      });
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function forgotPassword(email) {
    try {
      const response = await fetch('/.netlify/functions/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'forgotPassword', email }),
      });
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  