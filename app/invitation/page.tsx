import DressCodeAndGifts from "@/components/DressCodeAndGifts/DressCodeAndGifts";
import EventDetails from "@/components/EventDetails/EventDetails";
import Invitation from "@/components/Invitation/Invitation";

export default function InvitationPage() {
  return (
    <main>
      <Invitation />
      <EventDetails />
      <div className="colorBackground">
        <DressCodeAndGifts />
      </div>
      
    </main>
  );
}