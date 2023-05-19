import React from 'react';
import Container from '../components/common/Container';
import Header from '../components/common/Header';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactsPage from '../components/pages/ContactsPage';
import Footer from '../components/common/Footer';

const Contacts: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs />
                <ContactsPage />
            </Container>
            <Footer />
        </>
    );
};

export default Contacts;