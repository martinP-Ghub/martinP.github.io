import React from 'react';

// class EventPractice extends Component{
//   render() {
//     return(
//       <div>
//         <h1>Event Test</h1>
//         <input type="text" name='message' placeholder='any'
//           onChange={
//             (e) => {
//               console.log(e.target.value);
//             }
//           }
//         />
//       </div>
//     );
//   }
// }

const EventPractice2 = () => {
    return(
        <div>
            <h1>Event Test</h1>
            <input type="text" name='message' placeholder='any'
                   onChange={
                       (e) => {
                           console.log(e.target.value);
                       }
                   }
            />
        </div>
    );
}

export default EventPractice2;