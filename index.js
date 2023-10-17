const charCount = 16
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ~`! @#$%^&*()_-+={[}]|\:;\"'<,>.?/"
let password = '';

for(let i = 0; i < charCount; i++) {
	password += chars.charAt(Math.floor(Math.random() * chars.length)); 
}

console.log(password);