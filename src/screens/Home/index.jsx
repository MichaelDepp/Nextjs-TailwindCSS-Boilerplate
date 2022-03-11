import Container from '../../components/Container';
import ProfileBlob from '../../components/ProfileBlob';

const Home = () => {
    return (
        <Container>
            <h1 className="p-4 text-center text-xl text-theme-primary font-bold">
                This is a boilerplate with Next.js, Tailwind CSS
            </h1>
            <div className="mt-44 lg:mt-80 flex justify-center">
                <ProfileBlob image={'./assets/rocket-icon.png'} />
            </div>
            <h1 className="fixed bottom-0 p-4 w-full text-center text-sm text-theme-primary">
                ⚡ Powered by Confetti Themes 🎉
            </h1>
        </Container>
    );
};

export default Home;
