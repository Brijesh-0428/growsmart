import { useState, useEffect } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Cart() {
	let user = JSON.parse(localStorage.getItem('mydata'))
	const [initval, orignalpriceproduct] = useState("");
	const [num, setnum] = useState();
	const [currentval, setmainnum] = useState();
	const [list, Setlist] = useState([]);
	const id = user._id
	const u_email = user.u_email




	useEffect(() => {
		Axios.get('http://localhost:1137/api/cartlist', { params: { u_email: u_email } }).then((response) => {

			orignalpriceproduct(response.data[0].productinitval);
			setnum(response.data[0].productqty);
			setmainnum(setnum * orignalpriceproduct);

			Setlist(response.data)
		})
	}, []);




	const handlechange = (e) => {
		setnum(e.target.value)
	}

	const mainpriceproduct = (e) => {
		setmainnum(e.target.value)
	}

	const incrnum = () => {
		if (num < 10) {
			var b = Number(num) + 1;
			var c = Number(initval);
			const currentval = b * c;



			setnum(Number(num) + 1);
			setmainnum(Number(currentval));
		}

	}
	const decrnum = () => {
		if (num > 1) {
			var b = Number(num) - 1;
			var c = Number(initval);
			var d = Number(currentval) - 0;
			let a = currentval - initval;
			setnum(Number(num) - 1);
			setmainnum(Number(a));
		}
	}


	const removecart = () => {
		Axios.post("http://localchost:1137/api/removecart", { u_email: u_email, }).then((response) => {
			Setlist(response.data)
		})

	}

	const savecart = () => {
		Axios.post("http://localchost:1137/api/savecart", { u_email: u_email, currentval: currentval, num: num, initval: initval }).then((response) => {
			Setlist(response.data)
		})

	}


	return (
		<>
			<h1>Cart</h1>
			{list.map((val) => {
				return (

					<>
						<div class="card mb-3">
							<div class="row g-0">
								<div class="col-md-4">

									<img src="resource/images/schemes/image-241.png" class="cartimg" alt="hh" />
									<img src="http://localhost:1137/images" class="cartimg" alt="hh" />
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h5 class="card-title">Agriculture Infrastructure Fund</h5>
										{/* <h5 class="card-title">{val.post_title}</h5> */}
										<div class="counterupdater">
											Price:<input type="text" class="mainvalue" id="orgval" value={initval} onChange={orignalpriceproduct} />

											<button class="decrementbtn" id="btndecrement" onClick={decrnum} >-</button>
											<input type="text" class="incrval" id="noofval" value={num} onChange={handlechange} />
											<button class="incrementbtn" id="btnincrement" onClick={incrnum} >+</button>


											Total Price:<input type="text" class="mainvalue" id="productval" value={currentval} onChange={mainpriceproduct} />

											<button class="deletebtn" id="btnincrement" onClick={removecart} > Remove</button>
											<button class="savelaterbtn" id="btnincrement" onClick={savecart} > Save For Later</button>

										</div>
										{/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

									</div>
								</div>
							</div>
						</div>


				   </>
				)

			})}

						<div class="hr">
							<div class="checkout">
								<div class="total">
									<div>
										<div class="Subtotal">Sub-Total</div>
										<div class="items">item</div>
									</div>
									<div class="total-amount">Total</div>
								</div>
								<button class="button">Checkout</button>
							</div>
						</div>
					</>
	)	
   
			
		
	
}

export default Cart