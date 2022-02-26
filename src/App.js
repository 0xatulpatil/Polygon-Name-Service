import React from 'react';
import './styles/App.css';



const App = () => {

  return (
		<div className="App">
			<div className="container">

				<div className="header-container">
					<header>
            <div className="left">
              <p className="title">🐱‍👤 Polygon Name Service</p>
              <p className="subtitle">Your immortal API on the blockchain!</p>
            </div>
					</header>
				</div>

        <div className="footer-container">
					<div
						className="footer-text"
						rel="noreferrer"
					>{`Built by 0xatulpatil`}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
