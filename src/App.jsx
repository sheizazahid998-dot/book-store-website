import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";

// Components & Pages
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import CuratedExcellence from "./components/CuratedExcellence";
import BooksellerFavorites from "./components/BooksellerFavorites";
import OurLiteraryJourney from "./components/OurLiteraryJourney";
import LegendaryVolumes from "./components/LegendaryVolumes";
import ViewAllBooks from "./components/ViewAllBooks";
import FooterSection from "./components/FooterSection";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import CreateAccount from "./Pages/CreateAccount";
import AboutUs from "./Pages/AboutUs";
import ShoppingCart from "./Pages/ShoppingCart";
import SignOut from "./Pages/SignOut";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <HeaderSection />
                  <HeroSection />
                  <CuratedExcellence />
                  <BooksellerFavorites />
                  <OurLiteraryJourney />
                  <LegendaryVolumes />
                  <FooterSection />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <>
                  <HeaderSection />
                  <AboutUs />
                  <FooterSection />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <>
                  <HeaderSection />
                  <ViewAllBooks />
                  <FooterSection />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <>
                  <HeaderSection />
                  <ContactUs />
                  <FooterSection />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <>
                  <HeaderSection />
                  <ShoppingCart />
                  <FooterSection />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/signout"
            element={
              <ProtectedRoute>
                <HeaderSection />
                <SignOut />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>

        <ToastContainer position="top-center" autoClose={2000} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
