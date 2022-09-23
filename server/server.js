require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/mongoose_config')

connection();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



// let login_register = true

// const UserForms = () => {
//     if(login_register){
//         login_register = false
//     }else{
//         login_register = true
//     }
// }

// return (
//     <div>
//         { login_register ?
//             <form name='Login'>
//                 <span>
//                     <input type='submit' value ='Sign In'/>
//                     <button onClick={ UserForms }>Register</button>
//                 </span>
//             </form>
//             :
//             <form name='Register'>
//                 <span>
//                     <input type='submit' value ='Sign Up'/>
//                     <button onClick={ UserForms }>Login</button>
//                 </span>
//             </form>
//         };
//     </div>
// )