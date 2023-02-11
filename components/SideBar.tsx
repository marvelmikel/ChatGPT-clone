import NewChat  from "./NewChat";

function SideBar() {
  return (
  <div className="p-2 flex flex-col h-screen">
    <div className="flex-1">
        <div>
            <NewChat/>
            <div>
                {/* ModeSelection */}
            </div>
            {/* Map through the ChatRowns */}
        </div>
    </div>
  </div>
  );
}

export default SideBar;
