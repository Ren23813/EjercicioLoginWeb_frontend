document.addEventListener('DOMContentLoaded', async () => {
    const usernameDisplay = document.getElementById('usernameDisplay')
    const userIdDisplay = document.getElementById('userIdDisplay')
    const logoutButton = document.getElementById('logoutButton')
    const backendUrl = 'http://localhost:3000'

    // 1. Verificar si tenemos un userId guardado
    const userId = localStorage.getItem('userId')
    const username = localStorage.getItem('username') 

    if (!userId) {
        alert('No han iniciado sesión. Redirigiendo a login...')
        window.location.href = 'index.html'
        return 
    }

userIdDisplay.textContent = userId
    usernameDisplay.textContent = username || 'Usuario'

 logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
        
        alert('Sesión cerrada.')
        window.location.href = 'index.html'
    })

})
