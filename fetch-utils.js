const SUPABASE_URL = 'https://nxkfcrgevcuksvdnaugc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54a2ZjcmdldmN1a3N2ZG5hdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjAsImV4cCI6MTk1OTkxNzQ2MH0.9e3rnFUxMChSkwzJQcBImTDSwY_4VDtfmLDUZ-dY7gc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./mylist');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function fetchItems() {
    const resp = await client.from('shopping').select().order('id');
    // console.log(resp);
    return checkError(resp);
}
export async function createItem(item) {
    const resp = await client.from('shopping').insert({ item });
    return checkError(resp);
}

export async function buyItem(id) {
    const resp = await client.from('shopping').update({ complete: true }).match({ id });
    return checkError(resp);
}

export async function deleteAllItems() {
    const resp = await client.from('shopping').delete().match({ user_id: client.auth.user().id });
    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
