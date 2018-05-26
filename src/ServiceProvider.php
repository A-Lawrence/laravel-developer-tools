<?php namespace ALawrence\LaravelDevTools;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Bootstrap all application events.
     *
     * @return void
     */
    public function boot()
    {
        // --
    }

    /**
     * Register this service provider.
     *
     * @return void
     */
    public function register()
    {
        \App::bind("aircraft-registration", function () {
            return new AircraftRegistration();
        });
    }
}
