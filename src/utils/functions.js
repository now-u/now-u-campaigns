import NewsletterSignupModal from "../components/newsletter-signup-modal/NewsletterSignupModal";
import ModalService from "../services/ModalService.jsx";

// ~~~~~~~~~~~~~ NEWSLETTER FUNCTIONS below ~~~~~~~~~~~~~ \\
export const openNewsletterSignupModal = (forceDisplayNewsletter = false) => {
  const newsletterSignupDismissed = sessionStorage.getItem(
    "newsletter-signup-dismissed"
  );
  const newsletterSignupCompleted = localStorage.getItem(
    "newsletter-signup-completed"
  );
  const showNewsletterSignup =
        forceDisplayNewsletter ||
        !(newsletterSignupDismissed || newsletterSignupCompleted);

  if (showNewsletterSignup) {
    const modalRef = ModalService.open(
      NewsletterSignupModal,
      {
        onSuccessfulSignup: () => {
          closeNewsletterSignupModal(modalRef);
        },
      },
      {
        color: "dark",
        onClose: () =>
          sessionStorage.setItem(
            "newsletter-signup-dismissed",
            "true"
          ),
      }
    );
  }
};

// Close newsletter sign-up modal after 5 seconds
export const closeNewsletterSignupModal = (modalRef) => {
  setTimeout(() => {
    ModalService.close(modalRef);
  }, 5000);
};
// ~~~~~~~~~~~~~ NEWSLETTER FUNCTIONS above ~~~~~~~~~~~~~ \\
