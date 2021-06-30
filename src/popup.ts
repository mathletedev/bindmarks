document.addEventListener("DOMContentLoaded", async () => {
	const bookmarksList = document.getElementById("bookmarks");

	chrome.storage.sync.get("bookmarks", (data) => {
		if (!data.bookmarks) {
			chrome.storage.sync.set({ bookmarks: [] });
			return;
		}
	});

	const testButton = document.getElementById(
		"test-button"
	) as HTMLButtonElement;

	testButton.onclick = () => (testButton.innerText = "Hello");
});
