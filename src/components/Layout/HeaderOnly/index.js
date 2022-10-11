import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="Content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
