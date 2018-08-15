function valid(f) {
	//requires: onkeyup="valid(this)" onblur="valid(this)"
	//the following is still able to be entered:
	// ` \u0060 | &#96;
	// # \u0023 | &#35;
	// ^ \u005E | &#94;
	// & \u0026 | &#38;
	// ; \u003B | &#59; 

	!(/^[A-z&#209;&#241;0-9]*$/i).test(f.value)?f.value = f.value.replace(/[^A-z&#209;&#241;0-9]/ig,''):null;	
}