@extends ('layouts/houslytemplate')

@section ('title') Hously-Homepage 
@endsection 

@section ('styles') 
<style>
    body{
        /* background-image: url('/img/background-homepage.jpg');
        background-position:center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 120%; */
        background: rgb(164,178,202);
background: linear-gradient(180deg, rgba(164,178,202,1) 0%, rgba(238,215,201,1) 50%, rgba(255,255,255,1) 100%);
    }
    
</style>
@endsection

@section ('content')
<section>
    <h1>Welcome to Hously</h1>
    <div class="index__contentbox">
        <div class="index__contentbox__big">
            
                <p>Meet a great app which will make your life as resident much easier</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci provident doloremque quibusdam eveniet aut autem? Reprehenderit magnam ducimus ipsum explicabo consequuntur, atque laudantium rerum, eveniet porro quam enim ipsam!
                Amet illum repellat iste numquam tenetur sunt unde vitae ratione possimus dolorum at dolorem eveniet enim aliquam, voluptate aperiam. Amet voluptas expedita sit reiciendis qui, quidem totam sunt laborum assumenda!
                Laboriosam, a mollitia voluptatem magnam, ducimus reiciendis doloribus dolorem consequatur cumque omnis quam distinctio obcaecati repellendus, minus provident? Et distinctio vero at officiis laborum accusamus magni debitis doloribus voluptatem recusandae!
                Reiciendis, provident? Fuga nisi, repellat doloribus nihil vero doloremque adipisci vitae nam fugiat illo commodi consequuntur dolores delectus omnis nostrum soluta pariatur laudantium earum eveniet neque, culpa odit, eligendi totam.
                Ab aliquam reprehenderit, repudiandae in pariatur dicta repellat autem numquam. Ab ratione temporibus, perspiciatis maiores eum nisi, blanditiis reprehenderit itaque placeat quos consequatur totam sequi. Voluptatum sunt nam saepe! Magni?
                Deserunt dolor maxime quae expedita, officia fugiat eaque cumque quia ex ad ipsam aliquid vitae vel ipsum esse, voluptates eos dignissimos porro sint molestiae aliquam enim quasi? Ea, fuga dolor!
                Doloribus quod expedita eius, mollitia maiores quam pariatur? Neque error omnis cupiditate ea atque hic labore vitae officia necessitatibus quas quo magni, ad dignissimos deserunt quisquam tenetur autem porro reiciendis.
                Accusantium dolor sequi ut odit eum aliquid autem vero magnam ullam numquam nemo eligendi ad dolorum amet omnis praesentium ipsa explicabo magni beatae voluptates, reiciendis ipsum neque eaque earum! Perspiciatis?
                Placeat reiciendis error aperiam quidem facere sint dolore consequatur, aliquam necessitatibus suscipit pariatur exercitationem. Obcaecati, voluptate? Expedita aut reprehenderit dicta eaque, consequatur fuga omnis! Ad ullam praesentium accusamus quo vitae!
                Soluta quo reprehenderit quibusdam quas rem aliquam officia exercitationem architecto dolores quia dignissimos velit animi sapiente laborum iusto explicabo placeat, id porro quaerat nobis aspernatur excepturi praesentium labore? Quod, totam!</p>
        </div>
        <div class="index__contentbox__small">
                <form method="POST" action="{{ route('register') }}">
                    <h2>Register your account</h2>
                        @csrf

                        <div class="form-group row">
                            <label for="first_name" class="col-md-4 col-form-label text-md-right">{{ __('First Name') }}</label>

                            <div class="col-md-6">
                                <input id="first_name" type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{ old('first_name') }}" required autocomplete="first_name" autofocus>

                                @error('first_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="last_name" class="col-md-4 col-form-label text-md-right">{{ __('Last Name') }}</label>

                            <div class="col-md-6">
                                <input id="last_name" type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{ old('last_name') }}" required autocomplete="last_name" autofocus>

                                @error('last_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="birth_date" class="col-md-4 col-form-label text-md-right">{{ __('Birth Date') }}</label>

                            <div class="col-md-6">
                                <input id="birth_date" type="date" class="form-control @error('birth_date') is-invalid @enderror" name="birth_date" value="{{ old('birth_date') }}" required autocomplete="birth_date" autofocus>

                                @error('birth_date')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="phone_number" class="col-md-4 col-form-label text-md-right">{{ __('Phone Number') }}</label>

                            <div class="col-md-6">
                                <input id="phone_number" type="number" class="form-control @error('phone_number') is-invalid @enderror" name="phone_number" value="{{ old('phone_number') }}" required autocomplete="phone_number" autofocus>

                                @error('phone_number')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form> 

        </div>
        <div class="index__contentbox__full">
            <img src="img/homepage__ilustration.jpg" alt="new home illustration">
        </div>

    </div>
</section>

@endsection