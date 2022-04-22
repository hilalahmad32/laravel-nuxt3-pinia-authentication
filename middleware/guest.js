export default function ({ redirect }) {
    if (localStorage.getItem('token')) {
        return redirect('/')
    }
}