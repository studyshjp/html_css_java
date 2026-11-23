/**
 * 
 */
//header id=todaydate
const todaydate=
document.squerySelector("#todaydate");

function showToday() {
	
const now= new Date();
// intl : library
// DateTimeFormat : date time 

todaydate.textContent= new intl.DateTimeFormat(
	"ko-KR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long"
	}
)
	.format(now);
}
