// import * as React from 'react'
// import {render, screen} from '@testing-library/react'

// test('renders Hello World', () => {
//   // Arrange
//   document.body.innerHTML = `
//     <div id="root"></div>
//     <script type="module">
//       const rootDiv = document.getElementById('root');
//       const myDiv = document.createElement('div');
//       myDiv.textContent = 'Hello World';
//       myDiv.className = 'container';
//       rootDiv.append(myDiv);
//     </script>
//   `

//   // Act
//   // We don't need an explicit act here because the script runs immediately

//   // Assert
//   const helloWorldElement = screen.getByText(/hello world/i)
//   expect(helloWorldElement).toBeInTheDocument()
//   expect(helloWorldElement).toHaveClass('container')
// })