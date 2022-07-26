import React from 'react';
import { Link } from 'react-router-dom';
import '../SCSS/Nav.scss'

const Navbar = () => {
	return (
		<header className='nav'>
			<nav>
				<ul className='navHome'>
					<li>
						<Link to='/'>Home</Link>
					</li>

					<li id='logo'>
						<Link to='/'>
							<img id='logo' src={'./ProductImg/elogo.png'} alt='Pagines Her'></img>
						</Link>
					</li>

					<li>
						<Link to='/product'>Products</Link>
					</li>

					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			
			</nav>
		</header>
	);
};

export default Navbar;