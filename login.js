document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm')
    const messageElement = document.getElementById('loginMessage')
    const backendUrl = 'http://localhost:3000'

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        messageElement.textContent = ''

        if (!username || !password) {
            messageElement.textContent = 'Por favor llenen todos los campos.'
            return
        }
	try {
            const response = await fetch(`${backendUrl}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })

            const data = await response.json() 

            if (response.ok) { 
                // Guardar el ID y username en localStorage
                localStorage.setItem('userId', data.userId)
                localStorage.setItem('username', username) 

                window.location.href = 'profile.html'
            }

	else { 
                messageElement.textContent = `Error: ${data.error || 'Usuario o contraseña inválidos'}`
                localStorage.removeItem('userId') 
                localStorage.removeItem('username')
            }
        } catch (error) {
            console.error('Error de login:', error)
            messageElement.textContent = 'Login falló. Problema de red o del servidor. Revisen la consola.'
            localStorage.removeItem('userId')
            localStorage.removeItem('username')
        }
    })
})

