export const addUser = () => {
    return (
        <form>
            <label htmlFor="firstName">
                <input type="text" placeholder="First Name"/>
            </label>
            <label htmlFor="lastName">
                <input type="text" placeholder="Last Name"/>
            </label>
            <label htmlFor="role">
                <input type="text" placeholder="Role"/>
            </label>
            <label htmlFor="email">
                <input type="email" placeholder=" Email"/>
            </label>
            <label htmlFor="password">
                <input type="password" placeholder="Password"/>
            </label>
        </form>
    )
}