const outer = (name) => {
    //closure: start
    const dev = name;
    const inner = () => {
        const oneLevelDeep = () => {
            console.log("Developed by " +dev);
        }
        oneLevelDeep();
    }
    inner();

    //closure: end
}

outer("chinmaykumbhare");

/**
 * Closure:
 * closure gives access to outer function’s scope from inner function
 */