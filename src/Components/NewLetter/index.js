const NewLetter = () => {
    return (
        <section class="section-positive text-center">
            <div class="container">
                <h2 class="title-default">Mantente informado</h2>
                <p class="section-description">Lorem Ipsum</p>
                <form action="//myaccount.us10.list-manage.com/subscribe/post?u=599a4d2b746f06b367c5f8085&amp;id=f429f2b2f5" method="POST" target="_blank" class="form-newsletter validate">
                    <fieldset class="row">
                        <div class="col-md-9 nopadding">
                            <input type="email" name="email" class="form-control form-negative" id="email-newsletter" placeholder="tu correo" required />
                        </div>
                        <div class="col-md-3 nopadding">
                            <button class="btn btn-success btn-lg btn-block" type="submit"><i class="fa fa-paper-plane"></i></button>
                        </div>
                    </fieldset>
                </form>
            </div>
		</section>
    )
}

export default NewLetter