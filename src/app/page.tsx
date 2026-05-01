"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Haze & Luxe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Haze & Luxe"
      description="Premium lash extensions and personalized esthetics in the heart of Coquitlam."
      buttons={[
        {
          text: "Book Appointment",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pink-orchids-vase-windowsill-with-white-chairs_181624-10971.jpg",
          imageAlt: "elegant lash studio interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67003.jpg",
          imageAlt: "elegant lash studio interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-bride-getting-ready-wedding_23-2149860801.jpg",
          imageAlt: "elegant lash studio interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/emo-resurgence-concept-with-candles-perfume_23-2149829748.jpg",
          imageAlt: "elegant lash studio interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetics-palettes-table_23-2147783933.jpg",
          imageAlt: "elegant lash studio interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-standing-bathroom_1157-20467.jpg",
          imageAlt: "elegant lash studio interior",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Elevating your natural beauty with precision and care.",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/luxury-retro-wall-lamp-cafe_1150-10890.jpg",
          alt: "professional esthetician working",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      features={[
        {
          title: "Classic & Volume Lashes",
          description: "Custom lash sets tailored to your eye shape.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-spa_23-2147939887.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-make-up-artist-applying-nude-eyeshadow-woman-with-brush_23-2148332533.jpg",
          buttonText: "See Styles",
        },
        {
          title: "Brow Lamination",
          description: "Perfectly defined, fluffy brows every single day.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-care-her-eyebrows_23-2148895509.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures-light-facial-massage_343596-4207.jpg",
          buttonText: "View Brows",
        },
        {
          title: "Facial Treatments",
          description: "Rejuvenating care for glowing, healthy skin.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-eyelashes-extension-application_23-2149627161.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/still-life-interior-details-living-room-decor_169016-6008.jpg",
          buttonText: "View Facials",
        },
      ]}
      title="Our Signature Services"
      description="Expertly curated treatments designed to enhance your unique look."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Lash Serum",
          price: "$45",
          variant: "Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-beautiful-girl-dye-eyelashes-smiling-white-background-beauty-health-cosmetology-concept_176420-14016.jpg",
        },
        {
          id: "p2",
          name: "Face Oil",
          price: "$38",
          variant: "Hydrating",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-beauty-products-different-recipients-composition_23-2148761432.jpg",
        },
        {
          id: "p3",
          name: "Brush Set",
          price: "$25",
          variant: "Tools",
          imageSrc: "http://img.b2bpic.net/free-photo/various-type-makeup-brushes-plastic-transparent-bag-with-purple-flower-twig-white-fur_23-2148129523.jpg",
        },
        {
          id: "p4",
          name: "Lash Foam",
          price: "$22",
          variant: "Cleanse",
          imageSrc: "http://img.b2bpic.net/free-photo/skin-oil-droppers-face-cream-recipients-arrangement_23-2148761436.jpg",
        },
        {
          id: "p5",
          name: "Brow Gel",
          price: "$30",
          variant: "Styling",
          imageSrc: "http://img.b2bpic.net/free-photo/pump-bottle_187299-47457.jpg",
        },
        {
          id: "p6",
          name: "Face Cream",
          price: "$52",
          variant: "Moisturizer",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-skincare-products-arrangement_23-2149249526.jpg",
        },
      ]}
      title="Shop Our Essentials"
      description="Take the Haze & Luxe quality home with our curated shop."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/best-friends-shopping-mall_329181-7984.jpg",
        },
        {
          id: "2",
          name: "Emily R.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-healthy-woman-bathrobe-posing-camera-indoors_1153-8644.jpg",
        },
        {
          id: "3",
          name: "Jessica M.",
          imageSrc: "http://img.b2bpic.net/free-photo/friendly-young-interracial-girls-good-mood-wear-nightgowns-pajama-party-leisure-lifestyle-beauty-concept_197531-31732.jpg",
        },
        {
          id: "4",
          name: "Chloe T.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67039.jpg",
        },
        {
          id: "5",
          name: "Megan L.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-smiley-bride-indoors_23-2149721993.jpg",
        },
      ]}
      cardTitle="Client Reviews"
      cardTag="Trusted by locals"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How long do lash extensions last?",
          content: "Typically 3-4 weeks with proper care.",
        },
        {
          id: "f2",
          title: "Do I need to prep for a facial?",
          content: "Just come with clean skin and we handle the rest.",
        },
        {
          id: "f3",
          title: "Where are you located?",
          content: "Conveniently located in Coquitlam with free parking.",
        },
      ]}
      title="Common Questions"
      description="Find everything you need to know about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal",
      }}
      text="Ready for a transformation? Reach out to Haze & Luxe today."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@hazeandluxe.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/spa-still-life-with-body-care-products-health-beauty-concept_169016-10915.jpg"
      logoText="Haze & Luxe"
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
