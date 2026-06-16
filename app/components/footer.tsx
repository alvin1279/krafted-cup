export default function Footer() {
  return (
    <div
      className="w-full min-h-[10dvh] flex flex-col text-amber-700 pt-3 bg-brand-grad-b
    "
    >
      <div className="footer-container flex flex-1">
        <div className="address-container flex flex-1 justify-start pl-3 sm:pl-5">
          <p className="text-sm">
            The krafted Cup <br />
            296 Talbot St N, <br />
            Essex, ON <br />
            N8M 2E1 <br />
            +15197767771
          </p>
        </div>
        <div className="uber-container flex flex-1 justify-end pr-3  sm:pr-5">
          uber
        </div>
      </div>
      <div className="copyright-container flex justify-center items-center pb-3">
        2026 NEXUS SECUTECH SOLUTION
      </div>
    </div>
  );
}
