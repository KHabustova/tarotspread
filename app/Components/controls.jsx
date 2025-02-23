function Controls(){
    return (
        <div className="flex flex-col item-center justify-center border-2 p-5 rounded-md m-8">
            <h1>Spreader</h1>
            <form>
                <label htmlFor="width">Width</label>
                <input type="number" id="width" />
                <label htmlFor="height">Height</label>
                <input type="number" id="height"/>
            </form>
            <button>Reset</button>
            <h2>Export</h2>
            <button>JSON</button><button>PDF</button>
        </div>
    )
}

export default Controls;