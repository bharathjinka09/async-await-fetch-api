async function loadUsers(){
	
	const response = await fetch('users.json')
	const users = await response.json()

	return users

		// (OR)
	
	// return (await fetch('users.json')).json()
}

usersEl = document.querySelector('#users')

document.addEventListener('DOMContentLoaded', async () => {
	let users = []

	try{
		users = await loadUsers()
		users.map(
			user => 
			usersEl.innerHTML += 
			`
			<div class="card p-2">
			${user.id}. ${user.name} (${user.age})

			</div>
			 <br>

			`
		)
	} catch (error){
		console.log('error')
		console.log(error)
	}

	console.log(users)
})