// This page redirects to '/contact'

export default function ContactUs() {
    return false
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/contact',
            permanent: true,
        },
    }
}