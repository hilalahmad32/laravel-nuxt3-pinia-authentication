export default function ({ redirect }) {
    if (!localStorage.getItem('token')) {
        return redirect('/login')
    }
}

// restart your application it will working